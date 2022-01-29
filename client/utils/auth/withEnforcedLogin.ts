import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import supabase from '@/utils/supabase';
import { baseRoute } from '@/client/utils/routes';

export default function withEnforcedLogin(composedGetServerSideProps?: GetServerSideProps) {
  return async (context: GetServerSidePropsContext) => {
    const { req } = context;
    const { user } = await supabase.auth.api.getUserByCookie(req);

    if (!user) {
      return {
        props: {},
        redirect: {
          // TODO: destination should be the login page
          destination: baseRoute({
            type: 'redirect',
            from: req.url ?? undefined,
            redirectCode: 'session_expired'
          })
        }
      }
    }

    if (composedGetServerSideProps) {
      return composedGetServerSideProps(context);
    }

    return {
      props: {}
    }
  }
}