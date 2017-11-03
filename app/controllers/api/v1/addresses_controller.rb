class Api::V1::AddressesController < ApplicationController
  skip_before_action :verify_authenticity_token
    protect_from_forgery unless: -> { request.format.json? }
  # before_action :authenticate_user!, only: [:show, :create]

  def index
    address = Address.last.to_json
    render json: address
  end

  def create
    address = Address.create(address_params)
  end

  private

  def address_params
    params.require(:address).permit(:longform_address, :latitude, :longitude)
  end

end
