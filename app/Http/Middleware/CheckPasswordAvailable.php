<?php

namespace App\Http\Middleware;
use Illuminate\Support\Facades\Auth;
use Closure;
use App\User;

class CheckPasswordAvailable
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
      $id = Auth::id();
      $check_user = User::find($id);

      if($check_user->password != null){
        return redirect('/redirect_dashboard');
      }
      return $next($request);
    }
}
