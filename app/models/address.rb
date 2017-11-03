class Address < ApplicationRecord
  validates :longform_address, presence: true
  validates :latitude, presence: true
  validates :longitude, presence: true
end
