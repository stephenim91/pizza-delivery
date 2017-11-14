require 'net/http'
require 'uri'
require 'json'
class Api::V1::ProcessingsController < ApplicationController
  skip_before_action :verify_authenticity_token
    protect_from_forgery unless: -> { request.format.json? }
  # before_action :authenticate_user!, only: [:show, :create]
  # before_filter :authorize


  def create
    items = params[:items]
    filtered_items = []
    items.each do |item|
      item[:quantity].times do |order|
        filtered_items << {"apiKey" => item[:item_api], "customizationChoices" => [], "comments" => item[:instruction]}
      end
    end
    token = ENV["REACT_APP_EAT_STREET_TOKEN"]
    binding.pry
    uri = URI.parse("https://api.eatstreet.com/publicapi/v1/send-order")
    request = Net::HTTP::Post.new(uri)
    request.content_type = "application/json"
    request["X-Access-Token"] = token
    request.body = JSON.dump({
      "restaurantApiKey" => processing_params[:restaurant_api_key],
      "items" => filtered_items,
      "method" => "delivery",
      "payment" => "cash",
      "test" => false,
      "comments" => processing_params[:comments],
      "card" => {
        "apiKey" => nil
      },
      "address" => {
        "apiKey" => nil,
        "streetAddress" => processing_params[:address],
        "latitude" => processing_params[:latitude],
        "longitude" => processing_params[:longitude]
      },
      "recipient" => {
        "apiKey" => nil,
        "firstName" => processing_params[:username],
        "lastName" => processing_params[:username],
        "phone" => processing_params[:phone],
        'email' => processing_params[:email]
      }
    })

    req_options = {
      use_ssl: uri.scheme == "https",
    }

    response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
      http.request(request)
    end
    binding.pryr

  # response.code
  # response.body
  end

  def processing_params
    params.require(:processing).permit(:restaurant_api_key, :items, :comments, :address, :latitude, :longitude, :email, :phone, :username)
  end

end
