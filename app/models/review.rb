class Review < ApplicationRecord
  belongs_to :user

  validates :rating, presence: true
  validates :body, presence: true
  validates :restaurant, presence: true
end
