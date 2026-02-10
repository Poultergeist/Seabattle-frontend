// import { Link } from 'react-router-dom';

// import { PAGES } from '@/shared/config/constants';
import { Card, CardHeader } from '@/shared/ui/Card';
import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from '@/shared/ui/Tabs';

import { LoginForm } from '@/auth/features/auth-login/ui/LoginForm';
import { RegisterForm } from '@/auth/features/auth-register/ui/RegisterForm';
// import { Input } from '@/shared/ui/Input';

export const MainPage = () => {
  return (
    <div className="flex size-full flex-1 items-center justify-center">
      {/* <Link to={PAGES.GAME_PAGES_ROOT.ROOT}>{'Go to Game Page'}</Link>
      <h1>{'Welcome to the Auth Main Page'}</h1>
      <Input placeholder="Enter your username" /> */}
      <Card className="mx-auto w-full max-w-96 bg-gradient-to-tr from-dark-bg to-light-bg pb-1.5 glow-lg glow-secondary md:pb-2.5">
        <Tabs defaultValue="login">
          <CardHeader className="flex w-full justify-center">
            <div className="rounded-xl border-border bg-light-bg p-1">
              <TabsList className="p-0">
                <TabsTrigger
                  value="login"
                  className="h-full text-base md:text-xl"
                >
                  {'Login'}
                </TabsTrigger>
                <TabsTrigger
                  value="register"
                  className="h-full text-base md:text-xl"
                >
                  {'Register'}
                </TabsTrigger>
              </TabsList>
            </div>
          </CardHeader>
          <TabsContents className="mt-4 px-1.5 md:mt-6 md:px-2.5">
            <TabsContent value="login" className="!overflow-visible">
              <LoginForm />
            </TabsContent>
            <TabsContent value="register" className="!overflow-visible">
              <RegisterForm />
            </TabsContent>
          </TabsContents>
        </Tabs>
      </Card>
    </div>
  );
};
