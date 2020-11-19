import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { StoreProvider } from '../libs/store'

type Props = {
  children?: ReactNode
  title?: string
}

const LayoutComponent = ({ children, title = 'This is the default title' }: Props) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header>
                <nav>
                    <Link href="/">
                        <a>Home</a>
                    </Link>{' '}
                    |{' '}
                    <Link href="/about">
                        <a>About</a>
                    </Link>{' '}
                    |{' '}
                    <Link href="/login">
                        <a>Login</a>
                    </Link>{' '}
                    |{' '}
                    <Link href="/dashboard">
                        <a>Dashboard</a>
                    </Link>{' '}
                    |{' '}
                    <Link href="/users">
                        <a>Users List</a>
                    </Link>{' '}
                    | <a href="/api/users">Users API</a>
                </nav>
            </header>
            {children}
            <footer>
                <hr />
                <span>I'm here to stay (Footer)</span>
            </footer>
        </div>
    )
}

const Layout = (props: Props) => {
    return <StoreProvider>
        <LayoutComponent {...props} />
    </StoreProvider>
}

export default Layout
