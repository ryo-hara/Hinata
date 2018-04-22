class CreateScores < ActiveRecord::Migration[5.2]
  def change
    create_table :scores do |t|
      t.integer :value
      t.integer :score_id

      t.timestamps
    end
  end
end
