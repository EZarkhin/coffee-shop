FEATURES:

-AUTH
  -Login
    Data Model:
    {
      email: string, validation - email format
      password: string, min 6 char
    }

    CALLOUT: 
    Login: POST baseURL/login
    request body: {
      email,
      password,
    }
    response body: {
      status: number, enum[200,401]
      data: {
        userType: string, enum[admin, worker]
      }
      error: any,
    }
-ADMIN PANEL
  -Manage resources
    Data model
    Coffee model
    {
      seeds: number - gramm,
      milk: number - miligramm,
    }
    Cups model
    {
      110ml: number - unit,
      250ml: number - unit,
      500ml: number - unit, 
    }
    Extra model
    {
      sugar: number - sticks,
    }
    Snaks model
    {
      cookies: number,
      bars: number,     => unit,
      candies: number,
    }

    CALLOUT
    update Coffee: PUT /admin/coffee
    request body: {
      seeds, - optional
      milk, - optional
    }
    response Body: {
      status: number, enum[200, 500]
    }


-WORKER PANEL
    USE ADMIN PANEL DATA MODEL
    CALLOUT:
    make espresso: POST /make-espresso

    request body: {
      extra: { - options
        sugar: number, number of sticks
      }
    }

    response body: {
      status: number, enum[200, 500]
      data: {
        message: string, status 200 -'Your espresso is on the way', 500 - 'Whoops! Not enough seeds'
      }
    }

    make latte: POST /make-latte

    request body: {
      size: string, enum[medium, large]
      extra: { - options
        sugar: number, number of sticks
      }
    }

    response body: {
      status: number, enum[200, 500]
      data: {
        message: string, status 200 -'Your latte is on the way', 500 - 'Whoops! Not enough seeds', 'Whoops! Not enough milk', 'Whoops! We out of cups'
      }
    }

CONSTANTS
 
  seedPortion = 8, gramm

