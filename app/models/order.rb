class Order < ApplicationRecord
  belongs_to :address

  validates :name, presence: true
  validates :price, presence: true
  validates :quantity, presence: true
  validates :restaurant, presence: true
  validates :item_api, presence: true
end
