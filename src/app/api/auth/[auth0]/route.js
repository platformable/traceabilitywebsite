import { handleAuth, handleLogin, handleLogout } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
  async login(NextApiRequest,  NextApiResponse) {
    return await handleLogin(NextApiRequest,  NextApiResponse, {
      returnTo: `/admin-panel`,
    });
  },
  async signup(NextApiRequest, NextApiResponse) {
    return await handleLogin(NextApiRequest,  NextApiResponse, {
      authorizationParams: {
        screen_hint: "signup",
      },
      returnTo: `/admin-panel`,
    });
  },
    async logout(NextApiRequest, NextApiResponse) {
      // cookies().delete('user-cookies')
      return await handleLogout(NextApiRequest,  NextApiResponse, {
        returnTo: `/`,
      });
    },
    // 'silent-login': handleLogin({
	// 		authorizationParams: {
	// 			prompt: 'none',
	// 			redirect_uri: `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/callback`,
	// 		},
    //   returnTo: `/user/settings`,
	// 	}),
});

export const dynamic = 'force-dynamic';