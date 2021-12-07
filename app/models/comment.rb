# == Schema Information
#
# Table name: comments
#
#  id           :bigint           not null, primary key
#  commenter_id :integer          not null
#  photo_id     :integer          not null
#  body         :text             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Comment < ApplicationRecord
  validates :commenter_id, :photo_id, :body, presence: true

  belongs_to :commenter,
    foreign_key: :commenter_id,
    class_name: :User

  belongs_to :photo,
    foreign_key: :photo_id,
    class_name: :Photo
end
