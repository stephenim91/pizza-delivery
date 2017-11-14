class Api::V1::OrdersController < ApplicationController
  skip_before_action :verify_authenticity_token
    protect_from_forgery unless: -> { request.format.json? }
  # before_action :authenticate_user!, only: [:show, :create]
  # before_filter :authorize


  def index
    addresses = Address.where(user: current_user)
    address = addresses.last
    orders = Order.where(address: address, ordered: false)
    restaurant_patch = orders.last.restaurant
    orders = Order.where(address: address, ordered: false, restaurant: restaurant_patch)
    checkout = {username: current_user.name, email: current_user.email, phone: current_user.phone, address: address.longform_address, latitude: address.latitude, longitude: address.longitude, orders: orders}
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
    params.require(:order).permit(:instruction, :name, :price, :quantity, :restaurant, :item_api)
  end

end
