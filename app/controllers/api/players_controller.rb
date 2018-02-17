class Api::PlayersController < ApplicationController
  before_action :set_player, except: [ :index, :create ]

  def index
    render json: Player.all
  end

  def create
    player = Player.new(player_params)
    if player.save
      render json: player
    else
      json_error(player)
    end
  end

  def show
    render json: @player
  end

  def update
    if @player.update(player_params)
      render json: @player
    else
      json_error(@player)
    end
  end

  def destroy
    @player.destroy
  end

  private
    def set_player
      @player = Player.find(params[:id])
    end

    def player_params
      params.require(:player).permit(:name)
    end
end
