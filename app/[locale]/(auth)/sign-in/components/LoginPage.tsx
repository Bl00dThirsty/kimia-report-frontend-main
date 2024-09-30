'use client'

import Image from "next/image"
import Link from "next/link"

import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import { apiClient } from "@/types/api"
import environment from "@/config/env"

const formSchema = z.object({
  login: z.string().email({ message: "Must be a valid email address"}), 
  password: z.string().min(6, { message: "Password must be at least 6 characters"})
})

export default function Login() {

  const { toast } = useToast()
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      login: "",
      password: ""
    }
  })

  useEffect(() => {
    console.log( localStorage.getItem('token') )
    localStorage.removeItem("token")
  }, [])

  const onLoginSubmit = async (values: z.infer<typeof formSchema>) => {
    
    const res = await apiClient(`${environment.apiUrl.AUTH_SERVICE}/login`, {
      method: "POST",
      body: JSON.stringify(values)
    })

    if ( res.valid ) {
      toast({
        description: res.message
      })

      // redirect the user to the dashboard
      localStorage.setItem("token", res.body as string)
      router.push("/dashboard")

    } else {
      toast({
        description: res.message,
        variant: "destructive"
      })
    }

  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[400px] gap-3">
          <div className="grid gap-3 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onLoginSubmit)} className="mt-2 space-y-4">
              <FormField
                control={form.control}
                name="login"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input placeholder="" {...field}></Input>
                    </FormControl>
                    <FormDescription>
                        {/* Enter your email */}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                        <Input placeholder="" type="password" {...field}></Input>
                    </FormControl>
                    <FormDescription>
                        Enter your password
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size={"lg"}>Login</Button>
            </form>
          </Form>
          {/* <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Link href={"/dashboard"}>
              <Button className="w-full">Login</Button>
            </Link>
          </div> */}
          {/* <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div> */}
          <div className="text-center text-sm">
            <Link href="/" className={buttonVariants({ variant: "link" })}>
              Go To Home
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block border-l-2">
        <Image
          src="/login-image.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
