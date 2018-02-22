class CreatePlayers < ActiveRecord::Migration[5.1]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :hp, :default => 20, :null => false

      t.timestamps
    end
  end
end
