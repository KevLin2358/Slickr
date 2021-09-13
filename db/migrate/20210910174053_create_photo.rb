class CreatePhoto < ActiveRecord::Migration[6.1]
  def change
    create_table :photos do |t|
      t.integer :uploader_id, null: false
      t.string :title, null: false
      t.text :description
      t.timestamps
    end
    add_index :photos, :uploader_id
    add_index :photos, :title
  end
end
