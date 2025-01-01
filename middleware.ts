import { auth } from "@/server/auth";

export default auth ((req) => {
  if (!req.auth && req.nextUrl.pathname !== "api/auth/signin") {
    const newUrl = new URL("/login", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
});
