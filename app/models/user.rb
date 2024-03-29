# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

  validates :username, :session_token, :email, presence: true, uniqueness: true
  validates :first_name, :last_name, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  
  has_many :photos,
    foreign_key: :uploader_id,
    class_name: :Photo

  has_many :comments,
    foreign_key: :commenter_id,
    class_name: :Comment

  has_many :likers,
    foreign_key: :liker_id,
    class_name: :Like

  has_many :followers,
    foreign_key: :follower_id,
    class_name: :Follow

  has_many :follows,
    foreign_key: :followee_id,
    class_name: :Follow
  
  after_initialize :ensure_session_token
  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end
end
