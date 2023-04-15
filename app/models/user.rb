class User < ApplicationRecord
    has_secure_password
    has_many :comments
  #  has_many :recipes, through: :comments

  has_many :recipes
 
   has_many :commented_recipes, through: :comments, source: :recipe

    validates :username, presence: true
    
    validates :username,  uniqueness: true
end
