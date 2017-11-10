class Api::V1::AddressesController < ApplicationController
  skip_before_action :verify_authenticity_token
    protect_from_forgery unless: -> { request.format.json? }
  # before_action :authenticate_user!, only: [:show, :create]
  # before_filter :authorize

  def index
    addresses = Address.where(user: current_user)
    address = addresses.last
    render json: address
  end

  def create
    address = Address.new(address_params)
    address.user = current_user
    address.save
    render json: address
  end

  private

  def address_params
    params.require(:address).permit(:longform_address, :latitude, :longitude)
  end

end
