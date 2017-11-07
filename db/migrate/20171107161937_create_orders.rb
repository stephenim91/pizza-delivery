class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.string :name, null: false
      t.string :price, null: false
      t.integer :quantity, default: 1
      t.boolean :ordered, default: false
      t.string :restaurant, null: false

      t.timestamps
      t.belongs_to :address
    end
  end
end
