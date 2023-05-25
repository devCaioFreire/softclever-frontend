import { AuthTokenError } from "@/services/errors/AuthTokenError";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { parseCookies, destroyCookie } from "nookies";
import { ParsedUrlQuery } from "querystring";

// export function SSRAuth<Private extends { [key: string]: any; }>(
//   fn: GetServerSideProps<Private>
// ) {
//   return async (
//     ctx: GetServerSidePropsContext
//   ): Promise<GetServerSidePropsResult<Private> | undefined> => {
//     const cookies = parseCookies(ctx);

//     const token = cookies["@AuthToken"];

//     if (!token) {
//       return {
//         redirect: {
//           destination: "/",
//           permanent: false,
//         },
//       };
//     }

//     try {
//       return await fn(ctx);
//     } catch (err) {
//       if (err instanceof AuthTokenError) {
//         destroyCookie(ctx, "@AuthToken");

//         return {
//           redirect: {
//             destination: "/",
//             permanent: false,
//           },
//         };
//       }
//     }
//   };
// }

export function SSRAuth<Private extends { [key: string]: any }>(
  fn: GetServerSideProps<Private>
) {
  return async (
    ctx: GetServerSidePropsContext<ParsedUrlQuery>
  ): Promise<GetServerSidePropsResult<Private> | undefined> => {
    const cookies = parseCookies(ctx);

    const token = cookies["@AuthToken"];

    if (!token) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    try {
      return await fn(ctx);
    } catch (err) {
      if (err instanceof AuthTokenError) {
        destroyCookie(ctx, "@AuthToken");

        return {
          redirect: {
            destination: "/",
            permanent: false,
          },
        };
      }
    }
  };
}
