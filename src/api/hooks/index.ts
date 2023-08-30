import streampayHooks from "./streampay"
import { Router } from "express"
import bodyParser from "body-parser"
import { wrapHandler } from "@medusajs/medusa"

const route = Router()

export default (app) => {
  app.use("/streampay", route)

  route.post(
    "/hooks",
    // StreamPay constructEvent fails without body-parser
    bodyParser.raw({ type: "application/json" }),
    wrapHandler(streampayHooks)
  )
  return app
}