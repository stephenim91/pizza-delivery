class Address < ApplicationRecord
  has_many :orders
  belongs_to :user

  validates :longform_address, presence: true
  validates :latitude, presence: true
  validates :longitude, presence: true
end
