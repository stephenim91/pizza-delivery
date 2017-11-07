class Api::V1::OrdersController < ApplicationController
  skip_before_action :verify_authenticity_token
    protect_from_forgery unless: -> { request.format.json? }
  # before_action :authenticate_user!, only: [:show, :create]

  def index
    # address = Address.last.to_json
    # render json: address
  end

  def create
    address = Address.last
    order = Order.new(order_params)
    order.address = address
    order.save
  end

  private

  def order_params
    params.require(:order).permit(:instruction, :name, :price, :quantity, :restaurant)
  end

end
