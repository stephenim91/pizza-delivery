class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.text :body, null: false
      t.string :restaurant, null:false
      t.string :username, null: false

      t.timestamps
      t.belongs_to :user
    end
  end
end
