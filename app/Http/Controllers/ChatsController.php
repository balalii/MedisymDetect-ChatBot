<?php

namespace App\Http\Controllers;

use App\Models\Chats;
use App\Models\Diagnose;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChatsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $diseasesDataDB = Diagnose::all();
        $userTestingDB = Chats::all();
        // dd($diseasesDataDB);
        return Inertia::render('Chats',[
            'userTestingDB' => $userTestingDB,
            'diseasesDataDB' => $diseasesDataDB,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $chats = new Chats();
        $chats->name_user = $request->name_user;
        $chats->symptom = $request->symptom;
        $chats->disease = $request->disease;
        $chats->probability = $request->probability;
        $chats->save();
        
        return redirect()->route('chats');

    }

    /**
     * Display the specified resource.
     */
    public function show(Chats $chats)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Chats $chats)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Chats $chats)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chats $chats)
    {
        Chats::whereNotNull('id')->delete();
        return redirect()->route('chats');

    }
}