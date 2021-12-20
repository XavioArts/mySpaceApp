# frozen_string_literal: true

class User < ActiveRecord::Base

  serialize :liked_posts, Array
  serialize :friends, Array

  extend Devise::Models 
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_many :posts, dependent: :destroy

  def self.unfriended_users(ids)
    ids = ids.empty? ? [0] : ids
    User.where("id NOT IN (?)", ids).order("created_at DESC")
  end

  def self.friended_users(ids)
    ids = ids.empty? ? [0] : ids
    User.where("id IN (?)", ids)
  end

  def self.liked(ids)
    ids = ids.empty? ? [0] : ids
    Post.where("id IN (?)", ids)
  end

end
