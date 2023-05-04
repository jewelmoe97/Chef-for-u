class Recipe < ApplicationRecord
    has_many :comments
    #  has_many :users, through: :comments
    
   belongs_to :user
    has_many :commented_users, through: :comments, source: :user
   
   
    validates :title, presence: true
    validates :instructions, length: { minimum: 3}
    validates :category, presence: true

   





end
