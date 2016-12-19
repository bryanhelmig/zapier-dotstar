# zapier-dotstar
Blinks lots of LEDs

This project uses a Raspberry Pi SPI port to drive a bunch of DotStar LEDs.
The trick is that the LEDs are arranged in a specific geometry, which makes
all of the shows work.

The shows attempt to avoid using any stateful information/counters, instead
all of the LED states are calculated from the current time/millisecond value.

It's not important that your Raspi know the current/real-time, instead, it's
only important that the clock is consistent.
