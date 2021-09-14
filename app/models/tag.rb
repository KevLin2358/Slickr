# == Schema Information
#
# Table name: tags
#
#  id         :bigint           not null, primary key
#  photo_id   :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Tag < ApplicationRecord

  validates :photo_id, :name, presence:true

  belongs_to :photo,
    foreign_key: :photo_id,
    class_name: :Photo

end
