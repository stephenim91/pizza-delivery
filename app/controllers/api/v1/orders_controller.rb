class Api::V1::OrdersController < ApplicationController
  skip_before_action :verify_authenticity_token
    protect_from_forgery unless: -> { request.format.json? }
  # before_action :authenticate_user!, only: [:show, :create]
  before_filter :authorize


  def index
    addresses = Address.where(user: current_user)
    address = addresses.last
    orders = Order.where(address: address, ordered: false)
    checkout = {address: address.longform_address, orders: orders}
    render json: checkout
  end

  def create
    addresses = Address.where(user: current_user)
    address = addresses.last
    order = Order.new(order_params)
    order.address = address
    order.save
  end

  private

  def order_params
    params.require(:order).permit(:instruction, :name, :price, :quantity, :restaurant)
  end

end
