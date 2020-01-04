class AddLikedVideosToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :liked_videos, :text
  end
end
