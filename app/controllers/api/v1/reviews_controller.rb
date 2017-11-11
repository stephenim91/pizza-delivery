class Api::V1::ReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token
    protect_from_forgery unless: -> { request.format.json? }
  # before_action :authenticate_user!, only: [:show, :create]
  before_filter :authorize

  def index
    reviews = Review.all
    render json: reviews
  end

  def create
    review = Review.new(review_params)
    review.user = current_user
    review.username = current_user.name
    review.save
    render json: review
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body, :restaurant)
  end

end
