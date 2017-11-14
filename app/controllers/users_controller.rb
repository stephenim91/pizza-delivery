class UsersController < ApplicationController


  def new
  end

  def create
    o = [('a'..'z'), ('A'..'Z')].map(&:to_a).flatten
    randomPassword = (0...12).map { o[rand(o.length)] }.join
    if user_params[:name] == "$#3jIOJ#fn332J()"
      user = User.create(name: "guest5%4232#1*53ng#D", email:"none", phone: "none", password: randomPassword, password_confirmation: randomPassword)
      session[:user_id] = user.id
      redirect_to '/'
    else
      user = User.new(user_params)
      if user.save
        session[:user_id] = user.id
        redirect_to '/'
      else
        session[:user_id] = nil
        redirect_to '/'
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :phone, :password, :password_confirmation)
  end

end
