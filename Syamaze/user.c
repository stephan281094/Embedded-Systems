/******************************************************************************/
/* Files to Include                                                           */
/******************************************************************************/

/* Device header file */
#if defined(__PIC24E__)
#include <p24Exxxx.h>
#elif defined (__PIC24F__)
//#include <p24Fxxxx.h>
#include <p24FJ64GB002.h>
#elif defined(__PIC24H__)
#include <p24Hxxxx.h>
#endif

#include "user.h"            /* variables/params used by user.c */

/******************************************************************************/
/* User Functions                                                             */
/******************************************************************************/

/* <Initialize variables in user.h and insert code for user algorithms.> */

/* TODO Initialize User Ports/Peripherals/Project here */

void InitApp(void) {
    // Setup analog functionality and port direction
    AD1PCFGL = 0xFFFF; // Make analog pins digital

    // Initialize peripherals
    // set up I/O ports
    TRISB = 0x0000; // all pins as output
    LATB = 0x0; // all set to 0

    // CN interrupts
    CNEN1 = 0; /* Disable all CN */
    CNEN2 = 0;

    CNEN1bits.CN2IE = 1;
    CNEN1bits.CN3IE = 1;
    CNEN2bits.CN29IE = 1;
    CNEN2bits.CN30IE = 1;

    IPC4bits.CNIP0 = 1;
    IPC4bits.CNIP1 = 0;
    IPC4bits.CNIP2 = 0;

    IFS1bits.CNIF = 0;
    IEC1bits.CNIE = 1;
}

