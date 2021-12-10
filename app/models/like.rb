# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  liker_id   :integer          not null
#  photo_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord

  validates :liker_id, :photo_id, presence: true

  belongs_to :user,
    foreign_key: :liker_id,
    class_name: :User

  belongs_to :photo,
    foreign_key: :photo_id,
    class_name: :Photo

  
end
