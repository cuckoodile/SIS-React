import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

import { useToast } from "@/components/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"

import MyInput from "../../components/ui/MyInput"


// Import function
import { useMutation } from "react-query"
import { loginAPI, registerAPI } from "../../api/authAPI"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function () {
    const [activeTab, setActiveTab] = useState('login')
    const [errorMessage, setErrorMessage] = useState(false)

    const usernameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const passwordConfirmationRef = useRef(null)

    const navigate = useNavigate()

    useEffect(() => {
        if (sessionStorage.getItem("accessToken")) {
            navigate("/")
        }
    }, [])

    const loginMutation = useMutation({
        mutationFn: loginAPI,
        onSuccess: (data) => {
            if (data.access) {
                sessionStorage.setItem("accessToken", data.access)
                navigate("/")
            } else {
                setErrorMessage(true)
            }
        },
        onError: (error) => {
            console.log("Errorrr")
        }
    })

    const handleLogin = () => {
        const formData = new FormData()
        formData.append("username", usernameRef.current.value)
        formData.append("password", passwordRef.current.value)
        console.log(usernameRef.current.value)
        console.log(passwordRef.current.value)
        loginMutation.mutate(formData)
    }

    const registerMustation = useMutation({
        mutationFn: registerAPI,
        onSuccess: (data) => {
            if (data.ok) {
                console.log('Username: ', usernameRef.current.value)
                console.log('Password: ', passwordRef.current.value)
                handleLogin()
            }
        }
    })

    const handleRegister = () => {
        const formData = new FormData()
        formData.append("username", usernameRef.current.value)
        formData.append("email", emailRef.current.value)
        formData.append("password", passwordRef.current.value)
        formData.append("password_confirmation", passwordConfirmationRef.current.value)
        console.log(usernameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
        registerMustation.mutate(formData)
    }


    return (
        <main className="dark bg-background w-screen h-screen text-foreground flex justify-center items-center">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-[400px]">
                <TabsContent value="login">
                    <Card>
                        <CardHeader>
                            <CardTitle className="">Log In</CardTitle>
                            <CardDescription>
                                Enter your account
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="school-id">School ID</Label>
                                <MyInput id="text" variant="username" ref={usernameRef} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <MyInput id="password" variant="password" ref={passwordRef} />
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-4">
                            <a onClick={() => setActiveTab('register')} className="text-blue-400 hover:text-blue-600 w-fit cursor-pointer"><center>No account yet?</center></a>
                            <Button className="mx-auto" onClick={handleLogin}>Enter Account</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="register">
                    <Card>
                        <CardHeader>
                            <CardTitle>Register</CardTitle>
                            <CardDescription>
                                Create an account
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="school-id">School ID</Label>
                                <MyInput id="text" variant="username" ref={usernameRef} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <MyInput id="text" variant="email" ref={emailRef} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <MyInput id="password" variant="password" ref={passwordRef} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Confirm Password</Label>
                                <MyInput id="password" variant="password" ref={passwordConfirmationRef} />
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-4">
                            <a onClick={() => setActiveTab('login')} className="text-blue-400 hover:text-blue-600 w-fit cursor-pointer"><center>Already have an account?</center></a>
                            <Button className="mx-auto" onClick={handleRegister}>Create Account</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>

            {/* Log in error dialog */}
            <Dialog open={errorMessage} onOpenChange={setErrorMessage}>
                <DialogContent className="sm:max-w-[425px] flex flex-col justify-center items-center">
                    <DialogHeader>
                        <center><DialogTitle>Invalid Log In</DialogTitle></center>
                    </DialogHeader>

                    <Button className="w-fit" onClick={() => setErrorMessage(false)}>CLOSE</Button>
                    <DialogFooter>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </main>
    )
}