import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import RegisterForm from "@/components/forms/RegisterForm";
import SignInForm from "components/forms/SignInForm";

function FormTabs() {
  return (
    <Tabs
      defaultValue="account"
      className="w-[400px] flex flex-col items-center"
    >
      <TabsList>
        <TabsTrigger value="account">Sign In</TabsTrigger>
        <TabsTrigger value="password">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <SignInForm />
      </TabsContent>
      <TabsContent value="password">
        <RegisterForm />
      </TabsContent>
    </Tabs>
  );
}

export default FormTabs;
