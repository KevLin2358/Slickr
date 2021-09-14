class CreateTag < ActiveRecord::Migration[6.1]
  def change
    
    create_table :tags do |t|
      t.integer :photo_id, null: false
      t.string :name, null: false
      t.timestamps
    end

    add_index :tags, :photo_id
  end
end
