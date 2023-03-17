class User < ApplicationRecord
    has_secure_password
    has_many :recipes
    has_many :comments
    validates :username, presence: true
    

    validates :username,  uniqueness: true
end
