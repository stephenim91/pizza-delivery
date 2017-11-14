class AddApiToOrders < ActiveRecord::Migration[5.1]
  def change
    add_column :orders, :item_api, :string
  end
end
