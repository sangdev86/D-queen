// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       id: 'credentials',
//       name: 'my-project',
//       async authorize(credentials) {
//         const auth =
//     })
//   ],
//   pages: {
//     signIn: '/login'
//   },
//   callbacks: {
//     jwt: async ({ token, user, account }) => {
//       if (account && user) {
//         return {
//           // works normally
//           accessToken: user.tokens.access,
//           refreshToken: user.tokens.refresh,
//           expiresAt: Date.now() + 10 * 1000,
//           user
//         };
//       }

//       if (Date.now() < token.expiresAt) {
//         return token;
//       }

//       // token is obtaining in refreshAccessToken but not saved...
//       // next request refreshAccessToken will be called again...
//       return refreshAccessToken(token);
//     },
//     session: async ({ session, token }) => {
//       session.user = token.user;
//       session.token = token.accessToken;
//       return session;
//     }
//   },
//   debug: true
// });
