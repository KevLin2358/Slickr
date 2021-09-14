# == Schema Information
#
# Table name: phototags
#
#  id         :bigint           not null, primary key
#  tag_id     :integer          not null
#  photo_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Phototag < ApplicationRecord
  validates :photo_id, :tag_id, presence: true

end
