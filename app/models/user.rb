class User < ApplicationRecord
    has_secure_password
    has_many :comments
  has_many :recipes, through: :comments
    validates :username, presence: true
    
    validates :username,  uniqueness: true
end
