# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models
	has_many :comments
  has_many :videos
  
  serialize :video_status, Array

  def self.liked(ids)
    ids = ids.empty? ? [0] : ids
    Video.where("id IN (?)", ids)
  end
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User
end


