class CreateAddressesTable < ActiveRecord::Migration[5.1]
  def change
    create_table :addresses do |t|
      t.string :longform_address, null: false
      t.string :latitude, null: false
      t.string :longitude, null: false

      t.timestamps
    end
  end
end
