class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
    protect_from_forgery unless: -> { request.format.json? }
  # before_action :authenticate_user!, only: [:show, :create]
  # before_filter :authorize

  def index
    if current_user && current_user.name == "guest5%4232#1*53ng#D"
      session_user = {name: "Guest", email: '$oij233f09jf2n%23jj2323h$9h23', phone: '', id: current_user.id}
    elsif current_user
      session_user = {name: current_user.name, email: current_user.email, phone: current_user.phone, id: current_user.id}
    else
      session_user = {name: "$oij233f09jf2n%23jj2323h$9h23"}
    end
    render json: session_user
  end
end
