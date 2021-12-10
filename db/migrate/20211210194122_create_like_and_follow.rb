class CreateLikeAndFollow < ActiveRecord::Migration[6.1]
  def change
    create_table :likes do |t|
      t.integer :liker_id, null: false
      t.integer :photo_id, null: false
      t.timestamps
    end

    create_table :follows do |t|
      t.integer :followee_id, null: false
      t.integer :follower_id, null: false
      t.timestamps
    end

    add_index :likes, [:photo_id, :liker_id], unique: true

    add_index :follows, [:followee_id, :follower_id], unique: true
  end
end
