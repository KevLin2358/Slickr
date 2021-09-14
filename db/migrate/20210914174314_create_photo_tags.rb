class CreatePhotoTags < ActiveRecord::Migration[6.1]
  def change
    
    create_table :photo_tags do |t|
      t.integer :tag_id, null: false
      t.integer :photo_id, null: false
      t.timestamps
    end

    add_index :photo_tags, :tag_id
    add_index :photo_tags, :photo_id
  end
end
