# == Schema Information
#
# Table name: photos
#
#  id          :bigint           not null, primary key
#  uploader_id :integer          not null
#  title       :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Photo < ApplicationRecord
  validates :uploader_id, :title, presence: true

  belongs_to :uploader,
    foreign_key: :uploader_id,
    class_name: :User

  has_many :tags,
    foreign_key: :photo_id,
    class_name: :Tag

  has_many :comments,
    foreign_key: :photo_id,
    class_name: :Comment

  has_many :likes,
    foreign_key: :photo_id,
    class_name: :Like

  
  # active storage  
  has_one_attached :file

end