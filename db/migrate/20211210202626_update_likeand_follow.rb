class UpdateLikeandFollow < ActiveRecord::Migration[6.1]
  def change

    add_index :likes, :photo_id
    add_index :likes, :liker_id

    add_index :follows, :follower_id
    add_index :follows, :followee_id

  end
end
